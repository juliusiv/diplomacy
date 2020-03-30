defmodule Diplomacy.Repo do
  use Ecto.Repo,
    otp_app: :diplomacy,
    adapter: Ecto.Adapters.Postgres
end
