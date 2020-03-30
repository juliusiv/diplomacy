defmodule Diplomacy.Game.Province do
  @type t :: :barents_sea | :north_atlantic_ocean | :norwegian_sea

  def provinces do
    ~w(
      barents_sea
      north_atlantic_ocean
      norwegian_sea
    )a
  end
end
