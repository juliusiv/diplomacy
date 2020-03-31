defmodule Diplomacy.Game.BordersTest do
  use ExUnit.Case, async: true

  alias Diplomacy.Game.Borders
  alias Diplomacy.Game.Province

  describe "borders" do
    test "validates" do
      for province <- Province.oceans() do
        %{
          sea: bordering_seas,
          land: bordering_lands
        } = Borders.borders(province)

        for bordering_province <- bordering_seas ++ bordering_lands,
        # for bordering_province <- bordering_seas,
            do:
              assert(
                Borders.borders?(province, bordering_province),
                "there's a problem with #{province} bordering #{bordering_province}"
              )
      end
    end
  end
end
