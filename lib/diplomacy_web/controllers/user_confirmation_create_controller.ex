defmodule DiplomacyWeb.UserConfirmationCreateController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts

  def create_user_confirmation(conn, %{"user" => %{"email" => email}}) do
    user = Accounts.get_user_by_email(email)

    if user do
      delivery_result =
        Accounts.deliver_user_confirmation_instructions(
          user,
          fn token -> "/api/users/confirm/#{token}" end
        )

      case delivery_result do
        {:error, :already_confirmed} ->
          conn |> put_status(202)

        _ ->
          conn |> put_status(201)
      end
    else
      conn |> put_status(404)
    end
  end
end
