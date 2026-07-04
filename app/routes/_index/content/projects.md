#### [Tradeinator](https://github.com/Zed-Bailey/Tradeinator)

A modular, event driven, algorithmic trading system
\
\
The goal of this project was to develop a module based trading
system. Built around a RabbitMQ event bus, strategies and modules
would connect to and consume events other modules would fire.
\
\
One requirement i had when developing it was to support hot
reloading of strategy parameters to allow real time adjustment to
strategies, this presented some interesting technical problems on
how to serialise strategeys and how to dynamically update their
state without affecting any existing state

---

#### [Idallic](https://github.com/Zed-Bailey/idallic)

[Deployed site](https://idallic.vercel.app/)
\
An experiment with node based applications
\
\
I've always been interested in how node based applications work so over a weekend or so
i developed a small resource management style game based around buying resource nodes and wiring them together to generate more advanced resources.
\
There's currently no end state of game, but you can sell resources to buy nodes and creating food and shelter will help grow your population.
