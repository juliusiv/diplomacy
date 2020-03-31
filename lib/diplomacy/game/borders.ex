defmodule Diplomacy.Game.Borders do
  alias Diplomacy.Game.Province

  @type border :: %{sea: list(Province.ocean()), land: list(Province.land())}

  @doc """
  Check whether or not 2 provinces border each other.
  """
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
      IO.inspect(province1)
      IO.inspect(province2)
      raise "invalid border"
    end
  end

  @doc """
  Return the land and sea borders for each province.
  """
  @spec borders(Province.t()) :: border()

  #############################################################################
  #   Seas
  #############################################################################
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
        sevastopol
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

  #############################################################################
  #   Austria
  #############################################################################
  def borders(:bohemia) do
    %{
      sea: ~w()a,
      land: ~w(
        galicia
        silesia
        tyrolia
        vienna
        munich
        berlin
      )a
    }
  end

  def borders(:budapest) do
    %{
      sea: ~w()a,
      land: ~w(
        galicia
        vienna
        trieste
        serbia
        rumania
      )a
    }
  end

  def borders(:galicia) do
    %{
      sea: ~w()a,
      land: ~w(
        warsaw
        ukraine
        silesia
        bohemia
        vienna
        budapest
        rumania
      )a
    }
  end

  def borders(:trieste) do
    %{
      sea: ~w(
        adriatic_sea
      )a,
      land: ~w(
        venice
        vienna
        tyrolia
        budapest
        serbia
        albania
      )a
    }
  end

  def borders(:tyrolia) do
    %{
      sea: ~w()a,
      land: ~w(
        munich
        bohemia
        vienna
        piedmont
        venice
      )a
    }
  end

  def borders(:vienna) do
    %{
      sea: ~w()a,
      land: ~w(
        bohemia
        galicia
        budapest
        trieste
        tyrolia
      )a
    }
  end

  #############################################################################
  #   England
  #############################################################################
  def borders(:clyde) do
    %{
      sea: ~w(
        norwegian_sea
        north_atlantic_ocean
      )a,
      land: ~w(
        edinburgh
        liverpool
      )a
    }
  end

  def borders(:edinburgh) do
    %{
      sea: ~w(
        norwegian_sea
        north_sea
      )a,
      land: ~w(
        clyde
        liverpool
        yorkshire
      )a
    }
  end

  def borders(:liverpool) do
    %{
      sea: ~w(
        north_atlantic_ocean
        irish_sea
      )a,
      land: ~w(
        clyde
        edinburgh
        wales
        yorkshire
      )a
    }
  end

  def borders(:london) do
    %{
      sea: ~w(
        english_channel
        north_sea
      )a,
      land: ~w(
        wales
        yorkshire
      )a
    }
  end

  def borders(:wales) do
    %{
      sea: ~w(
        english_channel
        irish_sea
      )a,
      land: ~w(
        liverpool
        london
        yorkshire
      )a
    }
  end

  def borders(:yorkshire) do
    %{
      sea: ~w(
        north_sea
      )a,
      land: ~w(
        edinburgh
        liverpool
        wales
        yorkshire
      )a
    }
  end

  #############################################################################
  #   France
  #############################################################################
  def borders(:brest) do
    %{
      sea: ~w(
        english_channel
        mid_atlantic_ocean
      )a,
      land: ~w(
        paris
        picardy
        gascony
      )a
    }
  end

  def borders(:burgundy) do
    %{
      sea: ~w()a,
      land: ~w(
        belgium
        munich
        ruhr
        picardy
        paris
        gascony
        marseilles
      )a
    }
  end

  def borders(:gascony) do
    %{
      sea: ~w(
        mid_atlantic_ocean
      )a,
      land: ~w(
        brest
        paris
        marseilles
        spain
      )a
    }
  end

  def borders(:marseilles) do
    %{
      sea: ~w(
        gulf_of_lyon
      )a,
      land: ~w(
        burgundy
        gascony
        piedmont
        spain
      )a
    }
  end

  def borders(:paris) do
    %{
      sea: ~w(
        gulf_of_lyon
      )a,
      land: ~w(
        brest
        burgundy
        picardy
        piedmont
      )a
    }
  end

  def borders(:picardy) do
    %{
      sea: ~w(
        english_channel
      )a,
      land: ~w(
        brest
        belgium
        burgundy
        paris
      )a
    }
  end

  #############################################################################
  #   Germany
  #############################################################################
  def borders(:berlin) do
    %{
      sea: ~w(
        baltic_sea
      )a,
      land: ~w(
        munich
        silesia
        prussia
        kiel
      )a
    }
  end

  def borders(:kiel) do
    %{
      sea: ~w(
        baltic_sea
        helgoland_bight
      )a,
      land: ~w(
        munich
        berlin
        ruhr
        holland
        denmark
      )a
    }
  end

  def borders(:munich) do
    %{
      sea: ~w()a,
      land: ~w(
        burgundy
        ruhr
        kiel
        berlin
        silesia
        bohemia
        tyrolia
      )a
    }
  end

  def borders(:prussia) do
    %{
      sea: ~w(
        baltic_sea
      )a,
      land: ~w(
        livonia
        warsaw
        berlin
        silesia
      )a
    }
  end

  def borders(:ruhr) do
    %{
      sea: ~w()a,
      land: ~w(
        belgium
        holland
        kiel
        munich
        burgundy
      )a
    }
  end

  def borders(:silesia) do
    %{
      sea: ~w()a,
      land: ~w(
        prussia
        berlin
        munich
        bohemia
        warsaw
      )a
    }
  end

  #############################################################################
  #   Italy
  #############################################################################
  def borders(:apulia) do
    %{
      sea: ~w(
        adriatic_sea
        ionian_sea
      )a,
      land: ~w(
        venice
        rome
        naples
      )a
    }
  end

  def borders(:naples) do
    %{
      sea: ~w(
        tyrrhenian_sea
        ionian_sea
      )a,
      land: ~w(
        apulia
        rome
      )a
    }
  end

  def borders(:piedmont) do
    %{
      sea: ~w(
        gulf_of_lyon
      )a,
      land: ~w(
        marseilles
        tyrolia
        tuscany
        venice
      )a
    }
  end

  def borders(:rome) do
    %{
      sea: ~w(
        tyrrhenian_sea
      )a,
      land: ~w(
        apulia
        naples
        tuscany
        venice
      )a
    }
  end

  def borders(:tuscany) do
    %{
      sea: ~w(
        gulf_of_lyon
        tyrrhenian_sea
      )a,
      land: ~w(
        piedmont
        rome
        venice
      )a
    }
  end

  def borders(:venice) do
    %{
      sea: ~w(
        adriatic_sea
      )a,
      land: ~w(
        tyrolia
        trieste
        tuscany
        apulia
        piedmont
        rome
      )a
    }
  end

  #############################################################################
  #   Russia
  #############################################################################
  def borders(:finland) do
    %{
      sea: ~w(
        gulf_of_bothnia
      )a,
      land: ~w(
        norway
        sweden
        st_petersburg
      )a
    }
  end

  def borders(:livonia) do
    %{
      sea: ~w(
        baltic_sea
        gulf_of_bothnia
      )a,
      land: ~w(
        prussia
        warsaw
        moscow
        st_petersburg
      )a
    }
  end

  def borders(:moscow) do
    %{
      sea: ~w()a,
      land: ~w(
        livonia
        warsaw
        st_petersburg
        ukraine
        sevastopol
      )a
    }
  end

  def borders(:sevastopol) do
    %{
      sea: ~w(
        black_sea
      )a,
      land: ~w(
        armenia
        rumania
        ukraine
        moscow
      )a
    }
  end

  def borders(:st_petersburg) do
    %{
      sea: ~w(
        gulf_of_bothnia
        barents_sea
      )a,
      land: ~w(
        finland
        livonia
        moscow
      )a
    }
  end

  def borders(:ukraine) do
    %{
      sea: ~w(
        gulf_of_bothnia
        barents_sea
      )a,
      land: ~w(
        warsaw
        sevastopol
        rumania
        galicia
        moscow
      )a
    }
  end

  def borders(:warsaw) do
    %{
      sea: ~w()a,
      land: ~w(
        moscow
        livonia
        prussia
        silesia
        galicia
        ukraine
      )a
    }
  end

  #############################################################################
  #   Turkey
  #############################################################################
  def borders(:ankara) do
    %{
      sea: ~w(
        black_sea
      )a,
      land: ~w(
        constantinople
        smyrna
        armenia
      )a
    }
  end

  def borders(:armenia) do
    %{
      sea: ~w(
        black_sea
      )a,
      land: ~w(
        ankara
        sevastopol
        smyrna
        syria
      )a
    }
  end

  def borders(:constantinople) do
    %{
      sea: ~w(
        aegean_sea
        black_sea
      )a,
      land: ~w(
        ankara
        bulgaria
        smyrna
      )a
    }
  end

  def borders(:smyrna) do
    %{
      sea: ~w(
        aegean_sea
        eastern_mediterranean
      )a,
      land: ~w(
        ankara
        armenia
        constantinople
        syria
      )a
    }
  end

  def borders(:syria) do
    %{
      sea: ~w(
        eastern_mediterranean
      )a,
      land: ~w(
        smyrna
        armenia
      )a
    }
  end

  #############################################################################
  #   Unoccupied
  #############################################################################
  def borders(:albania) do
    %{
      sea: ~w(
        adriatic_sea
        ionian_sea
      )a,
      land: ~w(
        trieste
        serbia
        greece
      )a
    }
  end

  def borders(:belgium) do
    %{
      sea: ~w(
        english_channel
        north_sea
      )a,
      land: ~w(
        picardy
        burgundy
        holland
        ruhr
      )a
    }
  end

  def borders(:bulgaria) do
    %{
      sea: ~w(
        black_sea
        aegean_sea
      )a,
      land: ~w(
        constantinople
        greece
        serbia
        rumania
      )a
    }
  end

  def borders(:denmark) do
    %{
      sea: ~w(
        helgoland_bight
        north_sea
        skagerrak
        baltic_sea
      )a,
      land: ~w(
        kiel
      )a
    }
  end

  def borders(:greece) do
    %{
      sea: ~w(
        ionian_sea
        aegean_sea
      )a,
      land: ~w(
        albania
        serbia
        bulgaria
      )a
    }
  end

  def borders(:holland) do
    %{
      sea: ~w(
        north_sea
        helgoland_bight
      )a,
      land: ~w(
        belgium
        ruhr
        kiel
      )a
    }
  end

  def borders(:portugal) do
    %{
      sea: ~w(
        mid_atlantic_ocean
      )a,
      land: ~w(
        spain
      )a
    }
  end

  def borders(:north_africa) do
    %{
      sea: ~w(
        mid_atlantic_ocean
        western_mediterranean
      )a,
      land: ~w(
        tunis
      )a
    }
  end

  def borders(:norway) do
    %{
      sea: ~w(
        skagerrak
        north_sea
        norwegian_sea
        barents_sea
      )a,
      land: ~w(
        sweden
        finland
        st_petersburg
      )a
    }
  end

  def borders(:rumania) do
    %{
      sea: ~w(
        black_sea
      )a,
      land: ~w(
        bulgaria
        serbia
        budapest
        galicia
        ukraine
        sevastopol
      )a
    }
  end

  def borders(:serbia) do
    %{
      sea: ~w()a,
      land: ~w(
        albania
        greece
        trieste
        budapest
        rumania
        bulgaria
      )a
    }
  end

  def borders(:spain) do
    %{
      sea: ~w(
        mid_atlantic_ocean
        western_mediterranean
        gulf_of_lyon
      )a,
      land: ~w(
        portugal
        gascony
        marseilles
      )a
    }
  end

  def borders(:sweden) do
    %{
      sea: ~w(
        skagerrak
        baltic_sea
        gulf_of_bothnia
      )a,
      land: ~w(
        denmark
        norway
        finland
      )a
    }
  end

  def borders(:tunis) do
    %{
      sea: ~w(
        ionian_sea
        tyrrhenian_sea
        western_mediterranean
      )a,
      land: ~w(
        north_africa
      )a
    }
  end
end
