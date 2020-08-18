defmodule DiplomacyWeb.PasswordUpdateController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts
  alias DiplomacyWeb.UserAuth

  def update_password(conn, %{"current_password" => password, "user" => user_params}) do
    user = conn.assigns.current_user

    case Accounts.update_user_password(user, password, user_params) do
      {:ok, user} ->
        conn
        |> UserAuth.log_in_user(user)
        |> put_status(200)

      {:error, changeset} ->
        conn |> put_status(403)
    end
  end
end
