### Roster Details<br />
Team Name: Team Turkey<br />
Roster: EMSTAR, h0kz, imoRR, lugseN, scolleN<br />
Global Rank: [223](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [131]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  599.3<br />
<br />
Final Rank Value (599.3) = Starting Rank Value (594.6) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.6
- 400 + ( ( 0.102 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 594.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1451 | 2024-11-15 | Team Norway                 | L   | 0.492      | -            | -                | -                | -         |    -8.04 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     1464 | 2024-11-15 | Los kogutos                 | L   | 0.491      | -            | -                | -                | -         |    -2.58 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     1472 | 2024-11-14 | Mindfreak (Australian team) | W   | 0.487      | 0.617        | 0.002 (0.001)    | 0.092 (0.028)    | 1 (0.487) |     9.69 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     1514 | 2024-11-13 | Metizport                   | W   | 0.479      | 0.617        | 0.074 (0.022)    | 0.654 (0.193)    | 1 (0.479) |    14.35 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     1518 | 2024-11-13 | Team Canada                 | L   | 0.479      | -            | -                | -                | -         |    -8.76 | EMSTAR, h0kz, imoRR, lugseN, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
