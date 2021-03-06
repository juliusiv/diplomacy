defmodule DiplomacyWeb.UserRegisterController do
  use DiplomacyWeb, :controller

  alias Diplomacy.Accounts
  alias DiplomacyWeb.UserAuth

  def register_user(conn, %{"user" => user_params}) do
    case Accounts.register_user(user_params) do
      {:ok, user} ->
        {:ok, _} =
          Accounts.deliver_user_confirmation_instructions(
            user,
            fn token -> "/api/users/confirm/#{token}" end
          )

        conn
        |> put_status(201)
        |> UserAuth.log_in_user(user)
        |> json(%{})

      {:error, %Ecto.Changeset{errors: [email: _]} = changeset} ->
        conn
        |> put_status(409)
        |> json(%{})

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(400)
        |> json(%{})
    end
  end
end
