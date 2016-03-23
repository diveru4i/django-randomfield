django-randomfield
========================

Simple field that generates random strings on buttonclick

![proof](https://raw.githubusercontent.com/diveru4i/django-randomfield/master/screen.png)

## Requirements

- Django>=1.4
- jQuery not included


## Howto

* Install:
    ```
       pip install -e git+https://github.com/diveru4i/django-randomfield.git#egg=random_field
    ```
* Add "random_field" to your INSTALLED_APPS
    ```python
       INSTALLED_APPS = (
           ...
           'random_field',
           ...

       )
    ```
* Usage:
```python
from random_field.fields import TokenField

class YourModel(models.Model):
    ## Generates random string based on max_length
    token = TokenField(max_length=25)
```

