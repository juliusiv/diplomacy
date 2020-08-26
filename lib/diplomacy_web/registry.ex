defmodule DiplomacyWeb.Registry do
  use Substrate.Registry,
    prefix: "/api",
    alias: DiplomacyWeb
  
  defmacro __using__(_opts) do
    quote do
      use Substrate.Controller
    end
  end
end
