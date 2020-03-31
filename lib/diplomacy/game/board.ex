defmodule Diplomacy.Game.Board do
  @moduledoc """
  Define the board graph.
  """
  alias Diplomacy.Game.Province
  alias Diplomacy.Game.Borders

  @spec graph() :: %{required(Province.t()) => Borders.border()}
  def graph do
    Province.provinces()
    |> Map.new(&Borders.borders/1)
  end

  @spec graph(list(Province.t())) :: %{required(Province.t()) => Borders.border()}
  def graph(provinces) do
    provinces
    |> Map.new(&Borders.borders/1)
  end
end
