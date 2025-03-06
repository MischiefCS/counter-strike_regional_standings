### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, tatm<br />
Global Rank: [141](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  661.0<br />
<br />
Final Rank Value (661.0) = Starting Rank Value (665.1) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.1
- 400 + ( ( 0.128 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 665.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      977 | 2024-12-07 | Undone                  | L   | 0.393      | -            | -                | -                | -         |    -5.23 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            7 |      987 | 2024-12-07 | Take Flyte Kings        | W   | 0.392      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.392) |     2.26 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            6 |     1007 | 2024-12-06 | Nouns Esports           | L   | 0.387      | -            | -                | -                | -         |    -3.96 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            5 |     1840 | 2024-10-20 | Timbermen               | W   | 0.073      | 0.333        | 0.001 (0.000)    | 0.011 (0.000)    | 1 (0.073) |     1.01 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            4 |     1842 | 2024-10-20 | Slugy's Shekel Squad    | W   | 0.072      | 0.333        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.072) |     0.70 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            3 |     1855 | 2024-10-19 | Penance (American Team) | W   | 0.067      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.067) |     0.39 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            2 |     1968 | 2024-10-13 | FLUFFY AIMERS           | W   | 0.026      | 0.262        | 0.001 (0.000)    | 0.099 (0.001)    | 0 (0.000) |     0.47 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            1 |     1977 | 2024-10-12 | InControl               | W   | 0.019      | 0.262        | 0.000 (0.000)    | 0.066 (0.000)    | 0 (0.000) |     0.24 | AlekS, corn, CrePoW, ReFuZR, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($420.19)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $5,500.00      | $400.66         |
| 2024-10-13 |      0.026 | $750.00        | $19.53          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
