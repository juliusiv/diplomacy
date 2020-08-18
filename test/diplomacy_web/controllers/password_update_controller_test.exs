defmodule DiplomacyWeb.PasswordUpdateControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.AccountsFixtures

  setup :register_and_log_in_user

  describe "PUT /api/users/settings/update_password" do
    test "updates the user password and resets tokens", %{conn: conn, user: user} do
      new_password_conn =
        put(conn, "/api/users/settings/update_password", %{
          "current_password" => AccountsFixtures.valid_user_password(),
          "user" => %{
            "password" => "new-valid-password",
            "password_confirmation" => "new-valid-password"
          }
        })

      assert new_password_conn.status == 200
      assert get_session(new_password_conn, :user_token) != get_session(conn, :user_token)
      assert Accounts.get_user_by_email_and_password(user.email, "new-valid-password")
    end

    test "does not update password on invalid data", %{conn: conn} do
      old_password_conn =
        put(conn, "/api/users/settings/update_password", %{
          "current_password" => "invalid",
          "user" => %{
            "password" => "too short",
            "password_confirmation" => "does not match"
          }
        })

      assert old_password_conn.status == 403

      assert get_session(old_password_conn, :user_token) == get_session(conn, :user_token)
    end
  end
end
