defmodule DiplomacyWeb.UserLogOutController do
  use DiplomacyWeb, :controller

  alias DiplomacyWeb.UserAuth

  def log_out_user(conn, _params) do
    conn
    |> UserAuth.log_out_user()
    |> json(%{})
  end
end
