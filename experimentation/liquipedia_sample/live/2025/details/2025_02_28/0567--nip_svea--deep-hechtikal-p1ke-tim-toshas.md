### Roster Details<br />
Team Name: NIP Svea<br />
Roster: DeeP, hechtikal, p1ke, TIM, toshas<br />
Global Rank: [567](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [352]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  410.5<br />
<br />
Final Rank Value (410.5) = Starting Rank Value (400.4) + Head To Head Adjustments (10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.4
- 400 + ( ( 0.000 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 400.4


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
|            9 |     2302 | 2024-11-30 | Rhyno Esports        | L   | 0.600      | -            | -                | -                | -         |    -1.23 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            8 |     2525 | 2024-11-26 | Dragon Esports Club  | L   | 0.573      | -            | -                | -                | -         |    -2.98 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            7 |     3288 | 2024-11-13 | Venom (Swedish team) | W   | 0.486      | 0.143        | 0.000 (0.000)    | 0.068 (0.005)    | 0 (0.000) |     9.68 | DeeP, hechtikal, otto, p1ke, toshas  |
|            6 |     3961 | 2024-11-01 | Showmakerz           | L   | 0.406      | -            | -                | -                | -         |    -3.06 | DeeP, hechtikal, otto, p1ke, toshas  |
|            5 |     4849 | 2024-10-15 | KILLBOX              | W   | 0.292      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     5.46 | DeeP, hechtikal, p1ke, toshas, Zitte |
|            4 |     5039 | 2024-10-11 | Northern Lights      | W   | 0.265      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     4.19 | DeeP, hechtikal, p1ke, toshas, Zitte |
|            3 |     5386 | 2024-10-05 | EYEBALLERS           | L   | 0.225      | -            | -                | -                | -         |    -0.59 | DeeP, hechtikal, p1ke, TIM, toshas   |
|            2 |     6549 | 2024-09-18 | Privateshow          | L   | 0.112      | -            | -                | -                | -         |    -1.17 | DeeP, hechtikal, otto, p1ke, toshas  |
|            1 |     7382 | 2024-09-05 | Kario Mart           | L   | 0.026      | -            | -                | -                | -         |    -0.17 | DeeP, hechtikal, otto, p1ke, toshas  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
