defmodule DiplomacyWeb.UserConfirmationCreateControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.Repo
  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "POST /api/users/confirm" do
    @tag :capture_log
    test "sends a new confirmation token", %{conn: conn, user: user} do
      conn = post(conn, "/api/users/confirm", %{"user" => %{"email" => user.email}})

      assert conn.status == 201
      assert Repo.get_by!(Accounts.UserToken, user_id: user.id).context == "confirm"
    end

    test "does not send confirmation token if account is confirmed", %{conn: conn, user: user} do
      Repo.update!(Accounts.User.confirm_changeset(user))

      conn = post(conn, "/api/users/confirm", %{"user" => %{"email" => user.email}})

      assert conn.status == 202
      refute Repo.get_by(Accounts.UserToken, user_id: user.id)
    end

    test "does not send confirmation token if email is invalid", %{conn: conn} do
      conn = post(conn, "/api/users/confirm", %{"user" => %{"email" => "unknown@example.com"}})

      assert conn.status == 404
      assert Repo.all(Accounts.UserToken) == []
    end
  end
end
