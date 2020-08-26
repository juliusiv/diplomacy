use Mix.Config

# Only in tests, remove the complexity from the password hashing algorithm
config :bcrypt_elixir, :log_rounds, 1

# Configure your database
config :diplomacy, Diplomacy.Repo,
  username: "postgres",
  password: "postgres",
  database: "diplomacy_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :diplomacy, DiplomacyWeb.Endpoint,
  http: [port: 4002],
  server: true

# Print only warnings and errors during test
config :logger, level: :warn

config :diplomacy, Diplomacy.Notifier.Mailer, adapter: Swoosh.Adapters.Test
