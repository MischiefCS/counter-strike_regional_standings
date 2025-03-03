### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: areokk, demente, kumao, noni, weaveR<br />
Global Rank: [240](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [151]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  634.3<br />
<br />
Final Rank Value (634.3) = Starting Rank Value (647.6) + Head To Head Adjustments (-13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.6
- 400 + ( ( 0.127 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 647.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1098 | 2024-12-29 | Temp                            | L   | 0.784      | -            | -                | -                | -         |   -12.55 | areokk, demente, kumao, noni, weaveR  |
|            8 |     2038 | 2024-12-01 | Team Novaq                      | W   | 0.600      | 0.143        | 0.030 (0.003)    | 0.219 (0.019)    | 0 (0.000) |    15.94 | areokk, demente, kumao, noni, weaveR  |
|            7 |     2058 | 2024-12-01 | AK BARS                         | W   | 0.599      | 0.143        | 0.008 (0.001)    | 0.067 (0.006)    | 0 (0.000) |     9.77 | areokk, demente, kumao, noni, weaveR  |
|            6 |     2108 | 2024-11-30 | Cerberus eSports (Russian team) | L   | 0.594      | -            | -                | -                | -         |   -12.71 | Areokk, demente, kumao, Noni, weaveR  |
|            5 |     2217 | 2024-11-28 | Metizport X                     | L   | 0.580      | -            | -                | -                | -         |    -8.85 | Areokk, demente, kumao, Noni, weaveR  |
|            4 |     2578 | 2024-11-17 | DEPO                            | L   | 0.505      | -            | -                | -                | -         |    -8.27 | areokk, noni, plushax, tasman, weaveR |
|            3 |     2597 | 2024-11-17 | MYSKILL                         | L   | 0.504      | -            | -                | -                | -         |    -8.54 | areokk, noni, plushax, tasman, weaveR |
|            2 |     2647 | 2024-11-16 | Yamato Esports                  | W   | 0.498      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.81 | areokk, noni, plushax, tasman, weaveR |
|            1 |     2929 | 2024-11-09 | AK BARS                         | W   | 0.453      | 0.143        | 0.008 (0.001)    | 0.067 (0.004)    | 0 (0.000) |     7.05 | areokk, demente, noni, rinn, weaveR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($838.66)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.506 | $100.31        | $50.71          |
| 2024-11-09 |      0.453 | $1,740.06      | $787.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
