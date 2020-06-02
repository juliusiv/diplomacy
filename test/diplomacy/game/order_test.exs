defmodule Diplomacy.Game.OrderTest do
  use ExUnit.Case, async: true

  import Diplomacy.Game.Order

  describe "the order sigil" do
    test "works for holds" do
      assert ~O(brest) == %{hold: :brest}
    end

    test "works for supports" do
      assert ~O(english_channel ^ picardy -> brest) == %{
               supporter: :english_channel,
               supportee: :picardy,
               to: :brest
             }
    end

    test "works for moves" do
      assert ~O(english_channel -> brest) == %{
               mover: :english_channel,
               to: :brest
             }
    end

    test "works for convoys" do
      assert ~O(english_channel : london -> brest) == %{
               convoyer: :english_channel,
               convoyee: :london,
               to: :brest
             }
    end
  end
end
