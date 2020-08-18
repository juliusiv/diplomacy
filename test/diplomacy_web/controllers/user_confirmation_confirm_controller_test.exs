defmodule DiplomacyWeb.UserConfirmationConfirmControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.Repo
  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "GET /api/users/confirm/:token" do
    test "confirms the given token once", %{conn: conn, user: user} do
      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_confirmation_instructions(user, url)
        end)

      conn = get(conn, "/api/users/confirm/#{token}")

      assert conn.status == 200
      assert Accounts.get_user!(user.id).confirmed_at
      assert Repo.all(Accounts.UserToken) == []

      conn = get(conn, "/api/users/confirm/#{token}")

      assert conn.status == 403
    end

    test "does not confirm email with invalid token", %{conn: conn, user: user} do
      conn = get(conn, "/api/users/confirm/oops")

      assert conn.status == 403
      refute Accounts.get_user!(user.id).confirmed_at
    end
  end
end
