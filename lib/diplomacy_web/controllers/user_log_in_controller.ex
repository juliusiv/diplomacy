defmodule DiplomacyWeb.UserLogInController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts
  alias DiplomacyWeb.UserAuth

  def log_in_user(conn, %{"user" => user_params}) do
    %{"email" => email, "password" => password} = user_params
    user = Accounts.get_user_by_email_and_password(email, password)

    if user do
      UserAuth.log_in_user(conn, user, user_params)
    else
      conn |> put_status(403)
    end
  end
end
