defmodule DiplomacyWeb.Router do
  use DiplomacyWeb, :router
  # alias DiplomacyWeb.Registry
  require Substrate.Registry

  import DiplomacyWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  Substrate.Registry.collect_all do
    entry(DiplomacyWeb.UserRegisterController, :register_user)
  end

  scope "/api", DiplomacyWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

    # post "/users/register", UserRegisterController, :register_user
    post "/users/log_in", UserLogInController, :log_in_user
    post "/users/reset_password", PasswordResetInitiateController, :initiate_password_reset
    put "/users/reset_password/:token", PasswordResetConfirmController, :confirm_password_reset
  end

  scope "/api", DiplomacyWeb do
    pipe_through [:browser, :require_authenticated_user]

    put "/users/settings/update_password", PasswordUpdateController, :update_password
    put "/users/settings/update_email", EmailUpdateInitiateController, :initiate_email_update

    get "/users/settings/confirm_email/:token",
        EmailUpdateConfirmController,
        :confirm_email_update
  end

  scope "/api", DiplomacyWeb do
    pipe_through(:api)

    delete "/users/log_out", UserLogOutController, :log_out_user
    post "/users/confirm", UserConfirmationCreateController, :create_user_confirmation
    get "/users/confirm/:token", UserConfirmationConfirmController, :confirm_user_confirmation
  end

  # This final scope serves the single-page app. It needs to be last in the route definitions
  # otherwise the `/*anything` catch-all will match everything.
  scope "/", DiplomacyWeb do
    pipe_through :browser

    get "/", PageController, :index
    get("/*anything", PageController, :index)
  end
end
