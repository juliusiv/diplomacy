defmodule DiplomacyWeb.UserLogInControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "POST /api/users/log_in" do
    test "logs the user in", %{conn: conn, user: user} do
      conn =
        post(conn, "/api/users/log_in", %{
          "user" => %{"email" => user.email, "password" => valid_user_password()}
        })

      assert get_session(conn, :user_token)

      # Now do a logged in request and assert on the menu
      conn = get(conn, "/")

      assert conn.status == 200
    end

    test "logs the user in with remember me", %{conn: conn, user: user} do
      conn =
        post(conn, "/api/users/log_in", %{
          "user" => %{
            "email" => user.email,
            "password" => valid_user_password(),
            "remember_me" => "true"
          }
        })

      assert conn.resp_cookies["user_remember_me"]
    end

    test "emits error message with invalid credentials", %{conn: conn, user: user} do
      conn =
        post(conn, "/api/users/log_in", %{
          "user" => %{"email" => user.email, "password" => "invalid_password"}
        })

      assert conn.status == 403
    end
  end
end
