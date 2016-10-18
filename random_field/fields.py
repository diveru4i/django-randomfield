# -*- coding: utf-8 -*-
from django import forms
from django.db import models
from django.template.loader import render_to_string


class TokenWidget(forms.Widget):
    class Media:
        js = ['random_field/token.js']
        css = {
            'all': ['random_field/token.css']
        }

    def __init__(self, max_length):
        super(TokenWidget, self).__init__()
        self.max_length = max_length

    def render(self, name, value, attrs=None):
        max_length = self.max_length
        input_width = self.max_length * 5
        return render_to_string('random_field/token.html', locals())


class TokenField(models.CharField):
    def formfield(self, **kwargs):
        kwargs['widget'] = TokenWidget(self.max_length)
        return super(TokenField, self).formfield(**kwargs)


try:
    from south.modelsinspector import add_introspection_rules
    add_introspection_rules([], ["^random_field\.fields\.TokenField"])
except ImportError:
    pass
