defmodule DiplomacyWeb.Router do
  use DiplomacyWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", DiplomacyWeb do
    pipe_through(:api)

    post("/log_in", PageController, :log_in)
    post("/log_out", PageController, :log_out)
    post("/sign_up", PageController, :sign_up)
  end

  scope "/", DiplomacyWeb do
    pipe_through :browser

    get "/", PageController, :index
    get("/*anything", PageController, :index)
  end

  # Other scopes may use custom stacks.
  # scope "/api", DiplomacyWeb do
  #   pipe_through :api
  # end
end
