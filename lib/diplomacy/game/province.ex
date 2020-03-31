defmodule Diplomacy.Game.Province do
  @type t :: sea() | land()

  @spec provinces :: list(t())
  def provinces do
    seas() ++ lands()
  end

  @type sea ::
          :adriatic_sea
          | :aegean_sea
          | :baltic_sea
          | :barents_sea
          | :black_sea
          | :eastern_mediterranean
          | :english_channel
          | :gulf_of_bothnia
          | :gulf_of_lyon
          | :helgoland_bight
          | :ionian_sea
          | :irish_sea
          | :mid_atlantic_ocean
          | :north_atlantic_ocean
          | :north_sea
          | :norwegian_sea
          | :skagerrak
          | :tyrrhenian_sea
          | :western_mediterranean

  @spec seas :: list(sea())
  def seas do
    ~w(
      adriatic_sea
      aegean_sea
      baltic_sea
      barents_sea
      black_sea
      eastern_mediterranean
      english_channel
      gulf_of_bothnia
      gulf_of_lyon
      helgoland_bight
      ionian_sea
      irish_sea
      mid_atlantic_ocean
      north_atlantic_ocean
      north_sea
      norwegian_sea
      skagerrak
      tyrrhenian_sea
      western_mediterranean
    )a
  end

  @type austrian ::
          :bohemia
          | :budapest
          | :galicia
          | :trieste
          | :tyrolia
          | :vienna

  def austrian do
    ~w(
      bohemia
      budapest
      galicia
      trieste
      tyrolia
      vienna
    )a
  end

  @type english ::
          :clyde
          | :edinburgh
          | :liverpool
          | :london
          | :wales
          | :yorkshire

  def english do
    ~w(
      clyde
      edinburgh
      liverpool
      london
      wales
      yorkshire
    )a
  end

  @type french ::
          :brest
          | :burgundy
          | :gascony
          | :marseilles
          | :paris
          | :picardy

  def french do
    ~w(
      brest
      burgundy
      gascony
      marseilles
      paris
      picardy
    )a
  end

  @type german ::
          :berlin
          | :kiel
          | :munich
          | :prussia
          | :ruhr
          | :silesia

  def german do
    ~w(
      berlin
      kiel
      munich
      prussia
      ruhr
      silesia
    )a
  end

  @type italian ::
          :apulia
          | :naples
          | :piedmont
          | :rome
          | :tuscany
          | :venice

  def italian do
    ~w(
      apulia
      naples
      piedmont
      rome
      tuscany
      venice
    )a
  end

  @type russian ::
          :finland
          | :livonia
          | :moscow
          | :sevastopol
          | :st_petersburg
          | :ukraine
          | :warsaw

  def russian do
    ~w(
      finland
      livonia
      moscow
      sevastopol
      st_petersburg
      ukraine
      warsaw
    )a
  end

  @type turkish ::
          :ankara
          | :armenia
          | :constantinople
          | :smyrna
          | :syria

  def turkish do
    ~w(
      ankara
      armenia
      constantinople
      smyrna
      syria
    )a
  end

  @type unoccupied ::
          :albania
          | :belgium
          | :bulgaria
          | :denmark
          | :greece
          | :holland
          | :portugal
          | :north_africa
          | :norway
          | :rumania
          | :serbia
          | :spain
          | :sweden
          | :tunis

  def unoccupied do
    ~w(
      albania
      belgium
      bulgaria
      denmark
      greece
      holland
      portugal
      north_africa
      norway
      rumania
      serbia
      spain
      sweden
      tunis
    )a
  end

  @type land ::
          english() | french() | german() | italian() | russian() | turkish() | unoccupied()

  @spec lands :: list(land())
  def lands do
    austrian() ++
      english() ++ french() ++ german() ++ italian() ++ russian() ++ turkish() ++ unoccupied()
  end

  @spec depots :: list(t())
  def depots do
    ~w(
      edinburgh
      liverpool
      london
      portugal
      spain
      tunis
      marseilles
      paris
      brest
      belgium
      holland
      kiel
      munich
      berlin
      norway
      denmark
      sweden
      st_petersburg
      moscow
      warsaw
      sevastapol
      ankara
      smyrna
      greece
      naples
      rome
      venice
      vienna
      budapest
      trieste
      serbia
      bulgaria
    )a
  end
end
