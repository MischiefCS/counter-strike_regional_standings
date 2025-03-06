### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: brn$, card, mlhzin, RenanZin, stormzyn<br />
Global Rank: [70](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [18]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  515.7<br />
<br />
Final Rank Value (515.7) = Starting Rank Value (508.1) + Head To Head Adjustments (7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.1
- 400 + ( ( 0.044 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 508.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      183 | 2025-02-17 | Dusty Roots        | W   | 0.265      | 0.371        | 0.001 (0.000)    | 0.255 (0.025)    | 0 (0.000) |     5.89 | brn$, card, mlhzin, RenanZin, stormzyn |
|            4 |      228 | 2025-02-15 | AdalYamigos        | W   | 0.252      | 0.371        | 0.000 (0.000)    | 0.242 (0.023)    | 0 (0.000) |     2.85 | brn$, card, mlhzin, RenanZin, stormzyn |
|            3 |      283 | 2025-02-13 | Swingers           | L   | 0.240      | -            | -                | -                | -         |    -1.92 | brn$, card, mlhzin, RenanZin, stormzyn |
|            2 |      305 | 2025-02-12 | ODDIK              | L   | 0.233      | -            | -                | -                | -         |    -1.67 | brn$, card, mlhzin, RenanZin, stormzyn |
|            1 |      359 | 2025-02-10 | Familia Maquininha | W   | 0.219      | 0.371        | 0.000 (0.000)    | 0.089 (0.007)    | 0 (0.000) |     2.42 | brn$, card, mlhzin, RenanZin, stormzyn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
