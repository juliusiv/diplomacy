defmodule DiplomacyWeb.PasswordResetInitiateController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts

  def initiate_password_reset(conn, %{"user" => %{"email" => email}}) do
    user = Accounts.get_user_by_email(email)

    if user do
      Accounts.deliver_user_reset_password_instructions(
        user,
        fn token -> "/users/reset_password/#{token}" end
      )

      conn |> put_status(202)
    else
      conn |> put_status(404)
    end
  end
end
