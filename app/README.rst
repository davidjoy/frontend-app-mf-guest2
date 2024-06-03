frontend-app-mf-guest2
##########################

|license-badge| |status-badge| |ci-badge| |codecov-badge|

.. |license-badge| image:: https://img.shields.io/github/license/openedx/frontend-app-mf-guest2.svg
    :target: https://github.com/openedx/frontend-app-mf-guest2/blob/main/LICENSE
    :alt: License

.. |status-badge| image:: https://img.shields.io/badge/Status-Maintained-brightgreen

.. |ci-badge| image:: https://github.com/openedx/frontend-app-mf-guest2/actions/workflows/ci.yml/badge.svg
    :target: https://github.com/openedx/frontend-app-mf-guest2/actions/workflows/ci.yml
    :alt: Continuous Integration

.. |codecov-badge| image:: https://codecov.io/github/openedx/frontend-app-mf-guest2/coverage.svg?branch=main
    :target: https://codecov.io/github/openedx/frontend-app-mf-guest2?branch=main
    :alt: Codecov

Purpose
=======

This MFE is a child 'remote' application demonstrating how we can dynamically compose micro-frontends together using Webpack Module Federation.  It exposes a component which is dynamically loaded by the companion host MFE, `frontend-app-mf-host`_.

.. _frontend-app-mf-host: https://github.com/davidjoy/frontend-app-mf-host

Running the two apps together demonstrates:

- Loading remote modules from this independently deployed MFE in the host MFE.
- Sharing libraries from the host with this MFE.  ``react``, ``react-dom``, and ``@openedx/paragon`` are shared.
- Dynamic module federation - the host app does not need to know who the remote app is at build time.
- Hot module replacement for both host and remote.
- Dynamically loaded CSS modules.

Getting Started
===============

These MFEs do not need a running Open edX instance to function.  You're welcome.

#. Start this MFE with:

   .. code-block::

      cd frontend-app-mf-guest2
      nvm use
      npm ci
      npm start

#. Finally, open the MFE in a browser

   Navigate to `http://localhost:8082 <http://localhost:8082>`_ to open the
   MFE.  This is what it should look like if everything worked:

   .. figure:: ./docs/images/template.jpg

      "Polycon marking template" by mangtronix is licensed under CC BY-SA 2.0.

Known Issues
============

Hot module replacement breaks if a developer first changes the host and then the remote.  HMR loses track of the remote's HMR configuration when this happens, resulting in an error until the page is refreshed.  Basically, if you're developing the host, don't try to develop guest (a remote) in the same page load.

License
=======

The code in this repository is licensed under the AGPLv3 unless otherwise
noted.

Please see `LICENSE <LICENSE>`_ for details.

Contributing
============

Contributions are very welcome.  Please read `How To Contribute`_ for details.

.. _How To Contribute: https://openedx.org/r/how-to-contribute

This project is currently accepting all types of contributions, bug fixes,
security fixes, maintenance work, or new features.  However, please make sure
to have a discussion about your new feature idea with the maintainers prior to
beginning development to maximize the chances of your change being accepted.
You can start a conversation by creating a new issue on this repo summarizing
your idea.

The Open edX Code of Conduct
============================

All community members are expected to follow the `Open edX Code of Conduct`_.

.. _Open edX Code of Conduct: https://openedx.org/code-of-conduct/

People
======

The assigned maintainers for this component and other project details may be
found in `Backstage`_. Backstage pulls this data from the ``catalog-info.yaml``
file in this repo.

.. _Backstage: https://open-edx-backstage.herokuapp.com/catalog/default/component/frontend-app-mf-guest2

Reporting Security Issues
=========================

Please do not report security issues in public.  Email security@openedx.org instead.
