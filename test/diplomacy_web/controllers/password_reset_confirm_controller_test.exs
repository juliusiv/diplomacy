defmodule DiplomacyWeb.PasswordResetConfirmControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "PUT /api/users/reset_password/:token" do
    setup %{user: user} do
      token =
        extract_user_token(fn url ->
          Accounts.deliver_user_reset_password_instructions(user, url)
        end)

      %{token: token}
    end

    test "resets password once", %{conn: conn, user: user, token: token} do
      conn =
        put(conn, "/api/users/reset_password/#{token}", %{
          "user" => %{
            "password" => "new valid password",
            "password_confirmation" => "new valid password"
          }
        })

      refute get_session(conn, :user_token)
      assert Accounts.get_user_by_email_and_password(user.email, "new valid password")
    end

    test "does not reset password on invalid data", %{conn: conn, token: token} do
      conn =
        put(conn, "/api/users/reset_password/#{token}", %{
          "user" => %{
            "password" => "too short",
            "password_confirmation" => "does not match"
          }
        })

      assert conn.status == 400
    end

    test "does not reset password with invalid token", %{conn: conn} do
      conn = put(conn, "/api/users/reset_password/oops")

      assert conn.status == 400
    end
  end
end
