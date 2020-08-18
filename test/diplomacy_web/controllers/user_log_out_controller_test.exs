defmodule DiplomacyWeb.UserLogOutControllerTest do
  use DiplomacyWeb.ConnCase, async: true

  import Diplomacy.AccountsFixtures

  setup do
    %{user: user_fixture()}
  end

  describe "DELETE /api/users/log_out" do
    test "logs the user out", %{conn: conn, user: user} do
      conn = conn |> log_in_user(user) |> delete("/api/users/log_out")

      refute get_session(conn, :user_token)
    end

    test "succeeds even if the user is not logged in", %{conn: conn} do
      conn = delete(conn, "/api/users/log_out")

      refute get_session(conn, :user_token)
    end
  end
end
