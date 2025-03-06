### Roster Details<br />
Team Name: Fake do Biru<br />
Roster: hardzao, lukiz, Machado, PKL, xureba<br />
Global Rank: [198](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  557.5<br />
<br />
Final Rank Value (557.5) = Starting Rank Value (531.6) + Head To Head Adjustments (25.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 531.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      482 | 2025-02-07 | ODDIK            | L   | 0.807      | -            | -                | -                | -         |    -5.74 | hardzao, lukiz, Machado, PKL, xureba |
|            9 |      510 | 2025-02-06 | AdalYamigos      | L   | 0.799      | -            | -                | -                | -         |    -9.63 | hardzao, lukiz, Machado, PKL, xureba |
|            8 |      521 | 2025-02-06 | KRÜ Esports      | W   | 0.798      | 0.143        | 0.000 (0.000)    | 0.150 (0.017)    | 0 (0.000) |    14.22 | hardzao, lukiz, Machado, PKL, xureba |
|            7 |      545 | 2025-02-05 | Imperial Esports | L   | 0.791      | -            | -                | -                | -         |    -3.25 | hardzao, lukiz, Machado, PKL, xureba |
|            6 |      701 | 2025-01-10 | Dusty Roots      | L   | 0.618      | -            | -                | -                | -         |    -5.26 | hardzao, lukiz, Machado, PKL, xureba |
|            5 |      707 | 2025-01-09 | Game Hunters     | W   | 0.612      | 0.384        | 0.001 (0.000)    | 0.262 (0.062)    | 0 (0.000) |    11.78 | hardzao, lukiz, Machado, PKL, xureba |
|            4 |      787 | 2024-12-20 | Game Hunters     | W   | 0.478      | 0.384        | 0.001 (0.000)    | 0.262 (0.048)    | 0 (0.000) |     9.48 | hardzao, lukiz, Machado, PKL, xureba |
|            3 |      811 | 2024-12-18 | ShindeN          | L   | 0.466      | -            | -                | -                | -         |    -5.85 | hardzao, lukiz, Machado, PKL, xureba |
|            2 |      833 | 2024-12-16 | Team Solid       | W   | 0.451      | 0.384        | 0.021 (0.004)    | 0.501 (0.087)    | 0 (0.000) |    11.15 | hardzao, lukiz, Machado, PKL, xureba |
|            1 |      877 | 2024-12-14 | Nitro.GG         | W   | 0.437      | 0.384        | 0.001 (0.000)    | 0.312 (0.052)    | 0 (0.000) |     8.99 | hardzao, lukiz, Machado, PKL, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
