defmodule DiplomacyWeb.UserConfirmationConfirmController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts

  # Do not log in the user after confirmation to avoid a
  # leaked token giving the user access to the account.
  def confirm_user_confirmation(conn, %{"token" => token}) do
    case Accounts.confirm_user(token) do
      {:ok, _} ->
        conn
        |> put_status(200)

      :error ->
        conn
        |> put_status(403)
    end
  end
end
