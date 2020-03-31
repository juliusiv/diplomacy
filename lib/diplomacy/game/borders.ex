defmodule Diplomacy.Game.Borders do
  alias Diplomacy.Game.Province

  @type border :: %{sea: list(Province.ocean()), land: list(Province.land())}

  @spec borders(Province.t()) :: border()

  @spec borders?(Province.t(), Province.t()) :: boolean
  def borders?(province1, province2) do
    %{
      sea: seas1,
      land: lands1
    } = borders(province1)

    %{
      sea: seas2,
      land: lands2
    } = borders(province2)

    p1_borders? = province1 in (seas2 ++ lands2)
    p2_borders? = province2 in (seas1 ++ lands1)

    if (p1_borders? and p2_borders?) or (not p1_borders? and not p2_borders?) do
      # We can just return one of these because they should match. If they don't, we'll
      # hit the exception block below.
      p1_borders?
    else
      raise "invalid border"
    end
  end

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

  def borders(:black_sea) do
    %{
      sea: ~w()a,
      land: ~w(
        ankara
        armenia
        bulgaria
        constantinople
        rumania
        sevastapol
        ukraine
      )a
    }
  end

  def borders(:eastern_mediterranean) do
    %{
      sea: ~w(
        aegean_sea
        ionian_sea
      )a,
      land: ~w(
        greece
        smyrna
        syria
      )a
    }
  end

  def borders(:english_channel) do
    %{
      sea: ~w(
        irish_sea
        mid_atlantic_ocean
        north_sea
      )a,
      land: ~w(
        belgium
        brest
        london
        picardy
        wales
      )a
    }
  end

  def borders(:gulf_of_bothnia) do
    %{
      sea: ~w(
        baltic_sea
      )a,
      land: ~w(
        finland
        livonia
        st_petersburg
        sweden
      )a
    }
  end

  def borders(:gulf_of_lyon) do
    %{
      sea: ~w(
        tyrrhenian_sea
        western_mediterranean
      )a,
      land: ~w(
        marseilles
        piedmont
        spain
        tuscany
      )a
    }
  end

  def borders(:helgoland_bight) do
    %{
      sea: ~w(
        north_sea
      )a,
      land: ~w(
        denmark
        holland
        kiel
      )a
    }
  end

  def borders(:ionian_sea) do
    %{
      sea: ~w(
        adriatic_sea
        aegean_sea
        eastern_mediterranean
        tyrrhenian_sea
      )a,
      land: ~w(
        albania
        apulia
        greece
        naples
        tunis
      )a
    }
  end

  def borders(:irish_sea) do
    %{
      sea: ~w(
        english_channel
        mid_atlantic_ocean
        north_atlantic_ocean
      )a,
      land: ~w(
        liverpool
        wales
      )a
    }
  end

  def borders(:mid_atlantic_ocean) do
    %{
      sea: ~w(
        english_channel
        irish_sea
        north_atlantic_ocean
        western_mediterranean
      )a,
      land: ~w(
        brest
        gascony
        north_africa
        portugal
        spain
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

  def borders(:north_sea) do
    %{
      sea: ~w(
        english_channel
        helgoland_bight
        norwegian_sea
        skagerrak
      )a,
      land: ~w(
        denmark
        edinburgh
        london
        norway
        yorkshire
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

  def borders(:skagerrak) do
    %{
      sea: ~w(
        baltic_sea
        north_sea
      )a,
      land: ~w(
        denmark
        norway
        sweden
      )a
    }
  end

  def borders(:tyrrhenian_sea) do
    %{
      sea: ~w(
        gulf_of_lyon
        ionian_sea
        western_mediterranean
      )a,
      land: ~w(
        naples
        rome
        tunis
        tuscany
      )a
    }
  end

  def borders(:western_mediterranean) do
    %{
      sea: ~w(
        gulf_of_lyon
        mid_atlantic_ocean
        tyrrhenian_sea
      )a,
      land: ~w(
        north_africa
        spain
        tunis
      )a
    }
  end
end
