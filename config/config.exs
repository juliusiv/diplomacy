# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :diplomacy,
  ecto_repos: [Diplomacy.Repo]

# Configures the endpoint
config :diplomacy, DiplomacyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "hfpqOs34Hb2wd/Mxr2sC7n5gunOeKnhArn1SAYHxJDYyO3rV6yRC/bxvkSczI8+F",
  render_errors: [view: DiplomacyWeb.ErrorView, accepts: ~w(html json)],
  live_view: [signing_salt: "pOEiI7Jx"],
  pubsub_server: Diplomacy.PubSub

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :diplomacy, Diplomacy.Notifier.Mailer,
  adapter: Swoosh.Adapters.Sendgrid,
  api_key: "my-api-key"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
