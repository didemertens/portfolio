from django import forms

class ContactForm(forms.Form):
  name = forms.CharField(required=True)
  from_email = forms.EmailField(required=True)
  message = forms.CharField(widget=forms.Textarea, required=True)

  def __init__(self, *args, **kwargs):
    super(ContactForm, self).__init__(*args, **kwargs)
    self.fields['name'].label = "Your name"
    self.fields['from_email'].label = "Your email"
    self.fields['message'].label = "Message"
