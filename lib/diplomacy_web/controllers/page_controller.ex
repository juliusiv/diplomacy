defmodule DiplomacyWeb.PageController do
  use DiplomacyWeb, :controller

  def index(conn, _params) do
    conn |> render("index.html")
  end
end
