defmodule Diplomacy.Game.Board do
  @moduledoc """
  Define the board graph.
  """
  alias Diplomacy.Game.Province

  @type border :: %{sea: list(Province.ocean()), land: list(Province.land())}

  @spec borders(Province.t()) :: border()

  def borders(:adriatic_sea) do
    %{
      sea: ~w(
        ionian_sea
      )a,
      land: ~w(
        albania
        apulia
        trieste
        venice
      )a
    }
  end

  def borders(:aegean_sea) do
    %{
      sea: ~w(
        eastern_mediterranean
        ionian_sea
      )a,
      land: ~w(
        bulgaria
        constantinople
        greece
        smyrna
      )a
    }
  end

  def borders(:baltic_sea) do
    %{
      sea: ~w(
        gulf_of_bothnia
        skagerrak
      )a,
      land: ~w(
        berlin
        denmark
        kiel
        livonia
        prussia
        sweden
        asdasd
      )a
    }
  end

  def borders(:barents_sea) do
    %{
      sea: ~w(
        norwegian_sea
      )a,
      land: ~w(
        norway
        st_petersburg
      )a
    }
  end

  def borders(:north_atlantic_ocean) do
    %{
      sea: ~w(
        norwegian_sea
        irish_sea
        mid_atlantic_ocean
      )a,
      land: ~w(
        clyde
        liverpool
      )a
    }
  end

  def borders(:norwegian_sea) do
    %{
      sea: ~w(
        barents_sea
        north_sea
        north_atlantic_ocean
      )a,
      land: ~w(
        clyde
        edinburgh
        norway
      )a
    }
  end


  # @spec graph() :: list(border())
  # def graph do
  #   Province.provinces()
  #   |> Map.new(&borders/1)
  # end

  @spec graph(list(Province.t())) :: %{required(Province.t()) => border()}
  def graph(provinces) do
    provinces
    |> Map.new(&borders/1)
  end
end
