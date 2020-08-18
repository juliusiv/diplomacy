defmodule DiplomacyWeb.EmailUpdateConfirmController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts

  def confirm_email_update(conn, %{"token" => token}) do
    case Accounts.update_user_email(conn.assigns.current_user, token) do
      :ok ->
        conn
        |> put_status(200)
        |> json(%{})

      :error ->
        conn |> put_status(403)
    end
  end
end
