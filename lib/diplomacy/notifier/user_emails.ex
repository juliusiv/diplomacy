defmodule Diplomacy.Notifier.UserEmails do
  import Swoosh.Email

  @doc """
  Deliver instructions to confirm account.
  """
  def confirm_email_instructions(to, user, url) do
    new()
    |> to(to)
    |> from("Diplomacy")
    |> subject("Confirm email")
    |> text_body("""

    ==============================

    Hi #{user.email},

    You can confirm your account by visiting the url below:

    #{url}

    If you didn't create an account with us, please ignore this.

    ==============================
    """)
  end

  @doc """
  Deliver instructions to reset password account.
  """
  def reset_password_instructions(to, user, url) do
    new()
    |> to(to)
    |> from("Diplomacy")
    |> subject("Reset password")
    |> text_body("""

    ==============================

    Hi #{user.email},

    You can reset your password by visiting the url below:

    #{url}

    If you didn't request this change, please ignore this.

    ==============================
    """)
  end

  @doc """
  Deliver instructions to update your e-mail.
  """
  def update_email_instructions(to, user, url) do
    new()
    |> to(to)
    |> from("Diplomacy")
    |> subject("Update email")
    |> text_body("""

    ==============================

    Hi #{user.email},

    You can change your e-mail by visiting the url below:

    #{url}

    If you didn't request this change, please ignore this.

    ==============================
    """)
  end
end
