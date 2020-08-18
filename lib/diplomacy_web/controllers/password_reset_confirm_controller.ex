defmodule DiplomacyWeb.PasswordResetConfirmController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts

  plug :get_user_by_reset_password_token

  # Do not log in the user after reset password to avoid a
  # leaked token giving the user access to the account.
  def confirm_password_reset(conn, %{"user" => user_params}) do
    case Accounts.reset_user_password(conn.assigns.user, user_params) do
      {:ok, _} ->
        conn
        |> put_status(200)

      {:error, _changeset} ->
        conn
        |> put_status(400)
    end
  end

  defp get_user_by_reset_password_token(conn, _opts) do
    %{"token" => token} = conn.params

    if user = Accounts.get_user_by_reset_password_token(token) do
      conn |> assign(:user, user) |> assign(:token, token)
    else
      conn
      |> put_status(400)
      |> halt()
    end
  end
end
