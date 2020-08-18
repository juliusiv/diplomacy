defmodule DiplomacyWeb.EmailUpdateInitiateControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.AccountsFixtures

  setup :register_and_log_in_user

  describe "PUT /api/users/settings/update_email" do
    @tag :capture_log
    test "updates the user email", %{conn: conn, user: user} do
      conn =
        put(conn, "/api/users/settings/update_email", %{
          "current_password" => AccountsFixtures.valid_user_password(),
          "user" => %{"email" => AccountsFixtures.unique_user_email()}
        })

      assert conn.status == 200
      assert Accounts.get_user_by_email(user.email)
    end

    test "does not update email on invalid data", %{conn: conn} do
      conn =
        put(conn, "/api/users/settings/update_email", %{
          "current_password" => "invalid",
          "user" => %{"email" => "with spaces"}
        })

      assert conn.status == 403
    end
  end
end
