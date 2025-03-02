### Roster Details<br />
Team Name: Little Red Door<br />
Roster: Bymas, CacaNito, CRUC1AL, misutaaa, rallen<br />
Global Rank: [357](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [232]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  611.7<br />
<br />
Final Rank Value (611.7) = Starting Rank Value (539.5) + Head To Head Adjustments (72.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.5
- 400 + ( ( 0.071 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 539.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      409 | 2025-02-08 | Zero Tenacity              | L   | 1.000      | -            | -                | -                | -         |    -5.40 | Bymas, CacaNito, CRUC1AL, misutaaa, rallen |
|            4 |      414 | 2025-02-08 | NEVERMORE (Ukrainian team) | L   | 1.000      | -            | -                | -                | -         |    -6.63 | Bymas, CacaNito, CRUC1AL, misutaaa, rallen |
|            3 |      433 | 2025-02-08 | QPT                        | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.384 (0.055)    | 0 (0.000) |    29.73 | Bymas, CacaNito, CRUC1AL, misutaaa, rallen |
|            2 |      450 | 2025-02-08 | SINNERS Esports            | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.595 (0.085)    | 0 (0.000) |    27.78 | Bymas, CacaNito, CRUC1AL, misutaaa, rallen |
|            1 |      519 | 2025-02-07 | ALASKA                     | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.910 (0.130)    | 0 (0.000) |    26.69 | Bymas, CacaNito, CRUC1AL, misutaaa, rallen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
