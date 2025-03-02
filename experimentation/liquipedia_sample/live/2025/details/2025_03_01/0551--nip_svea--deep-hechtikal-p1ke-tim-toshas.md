### Roster Details<br />
Team Name: NIP Svea<br />
Roster: DeeP, hechtikal, p1ke, TIM, toshas<br />
Global Rank: [551](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [343]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  409.0<br />
<br />
Final Rank Value (409.0) = Starting Rank Value (400.5) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2067 | 2024-11-30 | Rhyno Esports        | L   | 0.594      | -            | -                | -                | -         |    -1.39 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            8 |     2300 | 2024-11-26 | Dragon Esports Club  | L   | 0.567      | -            | -                | -                | -         |    -3.02 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            7 |     3036 | 2024-11-13 | Venom (Swedish team) | W   | 0.480      | 0.268        | 0.000 (0.000)    | 0.069 (0.009)    | 0 (0.000) |     9.43 | DeeP, hechtikal, otto, p1ke, toshas  |
|            6 |     3710 | 2024-11-01 | Showmakerz           | L   | 0.400      | -            | -                | -                | -         |    -3.10 | DeeP, hechtikal, otto, p1ke, toshas  |
|            5 |     4575 | 2024-10-15 | KILLBOX              | W   | 0.286      | 0.268        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     4.39 | DeeP, hechtikal, p1ke, toshas, Zitte |
|            4 |     4758 | 2024-10-11 | Northern Lights      | W   | 0.259      | 0.268        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     4.09 | DeeP, hechtikal, p1ke, toshas, Zitte |
|            3 |     5077 | 2024-10-05 | EYEBALLERS           | L   | 0.219      | -            | -                | -                | -         |    -0.66 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            2 |     6188 | 2024-09-18 | Privateshow          | L   | 0.106      | -            | -                | -                | -         |    -1.14 | DeeP, hechtikal, otto, p1ke, toshas  |
|            1 |     6993 | 2024-09-05 | Kario Mart           | L   | 0.020      | -            | -                | -                | -         |    -0.14 | DeeP, hechtikal, otto, p1ke, toshas  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
