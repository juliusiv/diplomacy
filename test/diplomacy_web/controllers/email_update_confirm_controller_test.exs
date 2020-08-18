defmodule DiplomacyWeb.EmailUpdateConfirmControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  alias Diplomacy.Accounts
  alias Diplomacy.AccountsFixtures

  setup :register_and_log_in_user

  describe "GET /api/users/settings/confirm_email/:token" do
    setup %{user: user} do
      email = AccountsFixtures.unique_user_email()

      token =
        AccountsFixtures.extract_user_token(fn url ->
          Accounts.deliver_update_email_instructions(%{user | email: email}, user.email, url)
        end)

      %{token: token, email: email}
    end

    test "confirmation updates the user email once", %{
      conn: conn,
      user: user,
      token: token,
      email: email
    } do
      conn = get(conn, "/api/users/settings/confirm_email/#{token}")

      refute Accounts.get_user_by_email(user.email)
      assert Accounts.get_user_by_email(email)

      conn = get(conn, "/api/users/settings/confirm_email/#{token}")

      assert conn.status == 403
    end

    test "confirmation does not update email with invalid token", %{conn: conn, user: user} do
      conn = get(conn, "/api/users/settings/confirm_email/oops")

      assert conn.status == 403
      assert Accounts.get_user_by_email(user.email)
    end

    test "returns a 401 if user is not logged in", %{token: token} do
      conn = build_conn() |> get("/api/users/settings/confirm_email/#{token}")

      assert conn.status == 401
    end
  end
end
