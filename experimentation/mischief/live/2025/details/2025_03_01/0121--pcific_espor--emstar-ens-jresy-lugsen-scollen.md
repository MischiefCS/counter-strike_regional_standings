### Roster Details<br />
Team Name: PCIFIC Espor<br />
Roster: EMSTAR, eNs, jresy, lugseN, scolleN<br />
Global Rank: [121](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  765.0<br />
<br />
Final Rank Value (765.0) = Starting Rank Value (789.1) + Head To Head Adjustments (-24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.201[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.1
- 400 + ( ( 0.199 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 789.1


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
|           10 |     1185 | 2024-12-24 | Des1ngnadted                | W   | 0.753      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.753) |     4.90 | EMSTAR, eNs, jresy, lugseN, scolleN  |
|            9 |     1672 | 2024-12-08 | VOLT (European team)        | L   | 0.647      | -            | -                | -                | -         |   -12.24 | EMSTAR, eNs, jresy, lugseN, scolleN  |
|            8 |     1676 | 2024-12-08 | LEON Esports                | W   | 0.647      | 0.143        | 0.006 (0.001)    | 0.224 (0.021)    | 0 (0.000) |     8.91 | EMSTAR, eNs, jresy, lugseN, scolleN  |
|            7 |     2388 | 2024-11-23 | Endpoint                    | L   | 0.546      | -            | -                | -                | -         |    -9.03 | Cizzx, eNs, jresy, lugseN, scolleN   |
|            6 |     2690 | 2024-11-15 | Team Norway                 | L   | 0.492      | -            | -                | -                | -         |   -11.02 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            5 |     2703 | 2024-11-15 | Los kogutos                 | L   | 0.491      | -            | -                | -                | -         |    -5.82 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     2711 | 2024-11-14 | Mindfreak (Australian team) | W   | 0.487      | 0.617        | 0.002 (0.001)    | 0.099 (0.030)    | 1 (0.487) |     5.97 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     2760 | 2024-11-13 | Metizport                   | W   | 0.479      | 0.617        | 0.074 (0.022)    | 0.608 (0.180)    | 1 (0.479) |    12.61 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     2765 | 2024-11-13 | Homyno                      | L   | 0.479      | -            | -                | -                | -         |    -9.20 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     2997 | 2024-11-08 | Betera Esports              | L   | 0.446      | -            | -                | -                | -         |    -9.16 | Cizzx, eNs, jresy, lugseN, scolleN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,468.53)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-27 |      0.772 | $709.45        | $548.05         |
| 2024-11-24 |      0.552 | $1,250.00      | $690.63         |
| 2024-11-10 |      0.460 | $500.00        | $229.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
