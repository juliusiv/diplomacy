defmodule Diplomacy.Game.Order do
  alias Diplomacy.Game.Province

  @type move :: %{from: Province.t(), to: Province.t()}
  @type convoy :: %{convoyer: Province.t(), convoyee: Province.t(), to: Province.t()}
  @type hold :: %{holder: Province.t()}
  @type support :: %{supporter: Province.t(), supportee: Province.t(), to: Province.t()}
  @doc """
  A sigil for describing orders.

  ## Examples

      iex> ~O(english_channel -> brest)
      %{
        from: :english_channel,
        to: :brest
      }

      iex> ~O(english_channel : london -> brest)
      %{
        convoyer: :english_channel,
        convoyee: :london,
        to: :brest
      }

      iex> ~O(english_channel)
      %{
        hold: :english_channel
      }

      iex> ~O(english_channel ^ picardy -> brest)
      %{
        supporter: :english_channel,
        supportee: :picardy,
        to: :brest
      }
  """
  @spec sigil_O(string(), list()) :: move() | convoy() | hold() | support()
  def sigil_O(string, _) do
    pieces = String.split(string)

    case pieces do
      [from, "->", to] ->
        %{
          from: String.to_atom(from),
          to: String.to_atom(to)
        }

      [convoyer, ":", convoyee, "->", to] ->
        %{
          convoyer: String.to_atom(convoyer),
          convoyee: String.to_atom(convoyee),
          to: String.to_atom(to)
        }
      
      [holder] ->
        %{
          hold: String.to_atom(holder)
        }
      
      [supporter, "^", supportee, "->", to] ->
        %{
          supporter: String.to_atom(supporter),
          supportee: String.to_atom(supportee),
          to: String.to_atom(to)
        }

    end
  end
end
