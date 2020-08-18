defmodule DiplomacyWeb.EmailUpdateInitiateController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts
  alias DiplomacyWeb.UserAuth

  def initiate_email_update(conn, %{"current_password" => password, "user" => user_params}) do
    user = conn.assigns.current_user

    case Accounts.apply_user_email(user, password, user_params) do
      {:ok, applied_user} ->
        Accounts.deliver_update_email_instructions(
          applied_user,
          user.email,
          fn token -> "/api/users/settings/confirm_email/#{token}" end
        )

        # Should this be a 202?
        conn |> put_status(200)

      # "A link to confirm your e-mail change has been sent to the new address."

      {:error, _changeset} ->
        conn |> put_status(403)
    end
  end
end
