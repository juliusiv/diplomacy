defmodule DiplomacyWeb.UserRegisterControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  import Diplomacy.AccountsFixtures

  describe "POST /api/users/register" do
    @tag :capture_log
    test "creates account and logs the user in", %{conn: conn} do
      email = unique_user_email()

      conn =
        post(conn, "/api/users/register", %{
          "user" => %{"email" => email, "password" => valid_user_password()}
        })

      assert get_session(conn, :user_token)
      assert conn.status == 201

      # Now do a logged in request and assert that it's authed
      conn = get(conn, "/")

      assert conn.status == 200
    end

    test "render errors for invalid data", %{conn: conn} do
      conn =
        post(conn, "/api/users/register", %{
          "user" => %{"email" => "with spaces", "password" => "too short"}
        })

      assert conn.status == 400
    end
  end
end
