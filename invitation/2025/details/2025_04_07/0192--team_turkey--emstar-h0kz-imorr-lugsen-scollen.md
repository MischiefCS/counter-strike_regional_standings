### Roster Details<br />
Team Name: Team Turkey<br />
Roster: EMSTAR, h0kz, imoRR, lugseN, scolleN<br />
Global Rank: [192](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  566.5<br />
<br />
Final Rank Value (566.5) = Starting Rank Value (566.5) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.5
- 400 + ( ( 0.081 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 566.5


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
|            5 |     1451 | 2024-11-15 | Team Norway                 | L   | 0.244      | -            | -                | -                | -         |    -4.09 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     1464 | 2024-11-15 | Los kogutos                 | L   | 0.243      | -            | -                | -                | -         |    -1.71 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     1472 | 2024-11-14 | Mindfreak (Australian team) | W   | 0.239      | 0.617        | 0.001 (0.000)    | 0.029 (0.004)    | 1 (0.239) |     4.22 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     1514 | 2024-11-13 | Metizport                   | W   | 0.231      | 0.617        | 0.056 (0.008)    | 0.473 (0.067)    | 1 (0.231) |     6.53 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     1518 | 2024-11-13 | Team Canada                 | L   | 0.230      | -            | -                | -                | -         |    -5.04 | EMSTAR, h0kz, imoRR, lugseN, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
