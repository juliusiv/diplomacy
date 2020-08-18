defmodule DiplomacyWeb.PasswordResetInitiateControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.Repo
  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "POST /api/users/reset_password" do
    @tag :capture_log
    test "sends a new reset password token", %{conn: conn, user: user} do
      conn = post(conn, "/api/users/reset_password", %{"user" => %{"email" => user.email}})

      assert conn.status == 202
      assert Repo.get_by!(Accounts.UserToken, user_id: user.id).context == "reset_password"
    end

    test "does not send reset password token if email is invalid", %{conn: conn} do
      conn =
        post(conn, "/api/users/reset_password", %{"user" => %{"email" => "unknown@example.com"}})

      assert conn.status == 404
      assert Repo.all(Accounts.UserToken) == []
    end
  end
end
