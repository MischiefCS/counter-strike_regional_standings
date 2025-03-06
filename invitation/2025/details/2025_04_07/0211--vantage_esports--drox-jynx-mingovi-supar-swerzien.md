### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Drox, Jynx, Mingovi, supar, swerzieN<br />
Global Rank: [211](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  510.4<br />
<br />
Final Rank Value (510.4) = Starting Rank Value (488.4) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.4
- 400 + ( ( 0.043 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 488.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       34 | 2025-02-25 | Only One Word | L   | 0.927      | -            | -                | -                | -         |   -12.08 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |       49 | 2025-02-24 | TALON         | L   | 0.922      | -            | -                | -                | -         |   -15.72 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |       76 | 2025-02-23 | Rooster       | W   | 0.913      | 0.143        | 0.000 (0.000)    | 0.199 (0.026)    | 0 (0.000) |    17.69 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |      254 | 2025-02-14 | Housebets     | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.143 (0.017)    | 0 (0.000) |    15.73 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |      257 | 2025-02-14 | MANTRA        | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.144 (0.018)    | 0 (0.000) |    16.39 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
