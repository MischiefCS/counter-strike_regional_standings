### Roster Details<br />
Team Name: Alter Iron Club<br />
Roster: arias, clipzera, flow, Misha, Talen<br />
Global Rank: [131](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [33]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  677.0<br />
<br />
Final Rank Value (677.0) = Starting Rank Value (680.3) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.3
- 400 + ( ( 0.136 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 680.3


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
|           12 |      356 | 2025-02-10 | Immigrants Peek      | L   | 0.826      | -            | -                | -                | -         |   -14.64 | arias, clipzera, flow, Misha, Talen  |
|           11 |      393 | 2025-02-09 | Vagrants             | L   | 0.819      | -            | -                | -                | -         |   -15.33 | arias, clipzera, flow, Misha, Talen  |
|           10 |      421 | 2025-02-08 | Mythic               | W   | 0.813      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.90 | arias, clipzera, flow, Misha, Talen  |
|            9 |      836 | 2024-12-15 | Bad News Capybaras   | W   | 0.447      | 0.143        | 0.000 (0.000)    | 0.101 (0.006)    | 0 (0.000) |     5.90 | arias, clipzera, Keiti, Misha, Talen |
|            8 |      861 | 2024-12-14 | LAG Gaming           | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.46 | arias, clipzera, Keiti, Misha, Talen |
|            7 |      887 | 2024-12-13 | Undone               | L   | 0.434      | -            | -                | -                | -         |    -6.14 | arias, clipzera, Keiti, Misha, Talen |
|            6 |      954 | 2024-12-08 | Make Your Mind       | L   | 0.401      | -            | -                | -                | -         |    -6.27 | arias, clipzera, flow, Misha, Talen  |
|            5 |      975 | 2024-12-07 | Chicken Coop Esports | W   | 0.394      | 0.372        | 0.006 (0.001)    | 0.095 (0.014)    | 0 (0.000) |     5.39 | arias, clipzera, flow, Misha, Talen  |
|            4 |     1005 | 2024-12-06 | Bad Boys             | W   | 0.387      | 0.372        | 0.004 (0.001)    | 0.120 (0.017)    | 0 (0.000) |     5.53 | arias, clipzera, flow, Misha, Talen  |
|            3 |     1031 | 2024-12-05 | Undone               | W   | 0.381      | 0.372        | 0.002 (0.000)    | 0.200 (0.028)    | 0 (0.000) |     6.64 | arias, clipzera, flow, Misha, Talen  |
|            2 |     1064 | 2024-12-04 | Immigrants Peek      | W   | 0.374      | 0.372        | 0.001 (0.000)    | 0.230 (0.032)    | 0 (0.000) |     5.29 | arias, clipzera, flow, Misha, Talen  |
|            1 |     1084 | 2024-12-03 | StandOnBusiness      | W   | 0.367      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.99 | arias, clipzera, flow, Misha, Talen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,722.99)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.401 | $4,300.00      | $1,722.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
