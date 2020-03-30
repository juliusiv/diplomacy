defmodule Diplomacy.Game.Board do
  @moduledoc """
  Define the board graph.
  """
  alias Diplomacy.Game.Province

  @spec province(Province.t()) :: map()
  def province(:north_atlantic_ocean) do
    %{
      sea: ~w(
        norwegian_sea
        irish_sea
        mid_atlantic_ocean
      )a,
      land: ~w(clyde liverpool)a
    }
  end

  def province(:norwegian_sea) do
    %{
      sea: ~w(
        barents_sea
        north_sea
        north_atlantic_ocean
      )a,
      land: ~w(clyde edinburgh norway)a
    }
  end

  def province(:barents_sea) do
    %{
      sea: ~w(
        norwegian_sea
      )a,
      land: ~w(norway st_petersburg)a
    }
  end

  def graph do
    Province.provinces
    |> Map.new(&province/1)
  end
end
